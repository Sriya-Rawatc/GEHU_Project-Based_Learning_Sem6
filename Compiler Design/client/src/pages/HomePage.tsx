import { useEffect } from "react";
import illustration from "@/assets/illustration.png";
import FormComponent from "@/components/forms/FormComponent";

function HomePage() {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            body {
                background: #0a0a0a;
                color: #fff;
                margin: 0;
                overflow: hidden;
                font-family: 'Segoe UI', sans-serif;
            }

            .homepage-wrapper {
                position: relative;
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background: radial-gradient(circle at top left, #0d1b2a, #000000);
                overflow: hidden;
            }

            .stars-overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                background: url('https://www.transparenttextures.com/patterns/stardust.png');
                opacity: 0.05;
                z-index: 0;
                animation: twinkle 60s linear infinite;
            }

            @keyframes twinkle {
                0% { background-position: 0 0; }
                100% { background-position: 1000px 1000px; }
            }

            .content-wrapper {
                z-index: 1;
                display: flex;
                gap: 2rem;
                padding: 2rem;
                width: 90%;
                max-width: 1400px;
                height: 85%;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
                align-items: center;
                justify-content: space-between;
                animation: fadeIn 1.5s ease-in-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.98); }
                to { opacity: 1; transform: scale(1); }
            }

            .image-wrapper {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: float 6s ease-in-out infinite;
            }

            @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            }

            .illustration {
                width: 400px;
                max-width: 90%;
                filter: drop-shadow(0 0 15px #00ffff80) drop-shadow(0 0 30px #0066ff60);
                transition: transform 0.3s ease;
            }

            .illustration:hover {
                transform: scale(1.03);
            }

            .form-wrapper {
                flex: 1;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 1024px) {
                .content-wrapper {
                    flex-direction: column;
                    height: auto;
                }

                .illustration {
                    width: 300px;
                }
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="homepage-wrapper">
            <div className="stars-overlay" />
            <div className="content-wrapper">
                <div className="image-wrapper">
                    <img
                        src={illustration}
                        alt="CodeBrain Illustration"
                        className="illustration"
                    />
                </div>
                <div className="form-wrapper">
                    <FormComponent />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
