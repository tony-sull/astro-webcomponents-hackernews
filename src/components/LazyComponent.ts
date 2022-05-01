import requestIdleCallback from "../utils/requestIdleCallback";

requestIdleCallback(function () {
    const lazyElements = document.querySelectorAll('[data-client-visible]');

    const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                const element = document.createElement(entry.target.getAttribute('data-client-visible'));
                for (const { name, value } of entry.target.attributes) {
                    element.setAttribute(name, value);
                }
                element.replaceChildren(...entry.target.children);
                entry.target.replaceWith(element);
            }
        }
    })
    
    for (const element of lazyElements) {
        observer.observe(element);
    }
})
