import Navbar from "../../Navbar";
import { drawReading } from "tarot-deck";
import { useState, useEffect } from "react";
import FirstCard from "./ReadingComponents/FirstCard";
import SecondCard from "./ReadingComponents/SecondCard";
import ThirdCard from "./ReadingComponents/ThirdCard";
import ReadingButtons from "./ReadingButtons";
import ReadingButtonsClose from "./ReadingButtonsClose";

const Reading = () => {
    const [reading, setReading] = useState([]);
    const [show, setShow] = useState(false);

    const updateReading = () => {
        setReading(drawReading());
        setShow(!show);
    };

    useEffect(() => {
        setReading(drawReading());
        console.log("mount!");
    }, []);

    if (reading.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <nav>
                <Navbar />
            </nav>

            <div>
                <div className='grid grid-cols-3 justify-items-center bg-zinc-50 pb-24'>
                    <div></div>

                    <div>
                        {show ? (
                            <ReadingButtonsClose
                                updateReading={updateReading}
                                show={show}
                            />
                        ) : (
                            <ReadingButtons
                                updateReading={updateReading}
                                show={show}
                            />
                        )}
                    </div>

                    <div></div>
                </div>

                <div className='bg-slate-50 grid lg:grid-cols-3 content-center pb-56 justify-items-center grid-cols-1'>
                    <div>
                        {show && <FirstCard reading={reading} show={show} />}
                    </div>
                    <div>{show && <SecondCard reading={reading} />}</div>
                    <div>{show && <ThirdCard reading={reading} />}</div>
                </div>
            </div>
        </>
    );
};

export default Reading;
