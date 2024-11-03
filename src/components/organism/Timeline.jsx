import React, { useEffect, useState } from "react";
import { Timeline } from "../UI/Timeline";

export function TimelineDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/timeline.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // Map the JSON data to the desired format for the Timeline component
        const formattedData = jsonData.map((item) => ({
          title: item.title,
          content: (
            <div>
              {item.content.text.map((text, index) => (
                <p
                  key={index}
                  className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"
                >
                  {text}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-4">
                {item.content.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="timeline image"
                    width="500"
                    height="500"
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                ))}
              </div>
            </div>
          ),
        }));
        setData(formattedData);
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
