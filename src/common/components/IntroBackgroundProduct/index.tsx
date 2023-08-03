import React from 'react';

interface IntroBackgroundProductProps {
  fillColor1?: string;
  fillColor2?: string;
  ellipseColor?: string;
}

const IntroBackgroundProduct: React.FC<IntroBackgroundProductProps> = ({
  fillColor1 = 'fill-light-violet',
  fillColor2 = 'fill-blue-300',
  ellipseColor = 'fill-blue-500',
}) => {
    return (
        <div className="absolute">
            <svg
                className="absolute top-0 left-0 right-0 bottom-0 w-screen"
                viewBox="0 0 1475 666"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <ellipse cx="719.185" cy="332.897" rx="333.287" ry="332.897" className={ellipseColor} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={`M199.326 665.794C383.364 665.757 532.544 516.728 532.544 332.897C532.544 149.066 383.364 0.0370626 199.326 2.41304e-06C199.316 5.26992e-07 199.307 3.52731e-06 199.298 2.41304e-06C199.284 8.04361e-07 199.271 0 199.257 0C199.244 0 199.23 8.04361e-07 199.217 2.41304e-06L-439 2.41304e-06L-439 666L199.326 666V665.794Z`}
                    className={fillColor1}
                    fill={fillColor1}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={`M459.223 541.24C413.348 484.205 385.898 411.754 385.898 332.899C385.898 254.045 413.347 181.594 459.222 124.56C505.097 181.595 532.547 254.046 532.547 332.9C532.547 411.755 505.098 484.205 459.223 541.24Z`}
                    className={fillColor2}
                    fill={fillColor2}
                />
            </svg>
        </div>
    );
};

export default IntroBackgroundProduct;
