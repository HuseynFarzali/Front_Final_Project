const hoverableElements = document.querySelectorAll('[hoverable]');

hoverableElements.forEach((hoverableElement) => {
    const hoverAnimatedChildren = hoverableElement.querySelectorAll('[hover-animated]');
    hoverableElement.addEventListener('mouseover', e => {
        hoverAnimatedChildren.forEach((hoverAnimatedChild) => {
            const stylesAddedWhenHover = hoverAnimatedChild.getAttribute('on-parent-hover-add').split(' ');
            const stylesRemovedWhenHover = hoverAnimatedChild.getAttribute('on-parent-hover-remove').split(' ');

            stylesRemovedWhenHover.forEach((removeStyle) => {
                hoverAnimatedChild.classList.remove(removeStyle);
            });
            stylesAddedWhenHover.forEach((addStyle) => {
                hoverAnimatedChild.classList.add(addStyle);
            });
        })
    });

    hoverableElement.addEventListener('mouseout', e => {
        hoverAnimatedChildren.forEach((hoverAnimatedChild) => {
            const stylesRemovedWhenHover = hoverAnimatedChild.getAttribute('on-parent-hover-add').split(' ');
            const stylesAddedWhenHover = hoverAnimatedChild.getAttribute('on-parent-hover-remove').split(' ');

            stylesRemovedWhenHover.forEach((removeStyle) => {
                hoverAnimatedChild.classList.remove(removeStyle);
            });

            stylesAddedWhenHover.forEach((addStyle) => {
                hoverAnimatedChild.classList.add(addStyle);
            });
        })
    });
})