function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        }

        document.addEventListener("DOMContentLoaded", () => {
            const counterElement = document.getElementById("counter");
            animateValue(counterElement, 0, 10000, 2000);
        });

        function handleQuoteClick() {
            const btn = document.querySelector('.btn-primary');
            const originalText = btn.innerText;
            btn.innerText = "Processing...";
            btn.style.backgroundColor = "#111827"; 
            setTimeout(() => {
                alert("Thank you! We have received your request.");
                btn.innerText = originalText;
                btn.style.backgroundColor = ""; 
            }, 800);
        }