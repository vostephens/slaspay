import React, { useState } from "react"
import { FAQ_DATA } from "@components/FAQs/data/index"
import FAQs from "@components/FAQs/index"
import TagButton from "@components/TagButton"

const AccordionFAQ = () => {
  const [clickHeading, setClickHeading] = useState<boolean[]>([])

  const onToggle = (index: number) => {
    const updatedClickHeading = [...clickHeading]
    updatedClickHeading[index] = !clickHeading[index]
    setClickHeading(updatedClickHeading)
  }
  return (
    <div className="pb-8 mt-10">
      {FAQ_DATA.map((item, index) => {
        return (
          <FAQs
            key={"faqs" + index}
            clickHeading={clickHeading}
            item={item}
            index={index}
            onClick={() => onToggle(index)}
            tutorLastIndex={FAQ_DATA.length}
          />
        )
      })}
    </div>
  )
}

export default AccordionFAQ
