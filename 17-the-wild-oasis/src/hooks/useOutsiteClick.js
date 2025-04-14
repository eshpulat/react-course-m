import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(
        function () {
            function hansleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    handler();
                }
            }
            document.addEventListener("click", hansleClick, true);

            return () =>
                document.removeEventListener("click", hansleClick, true);
        },
        [handler, listenCapturing]
    );

    return ref;
}
