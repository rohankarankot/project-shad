import React from "react"
import { Button } from "~/components/ui/button"

const NotFoundComponent = ({ data: { title, subtitle, primaryAction, secondaryAction, className } }: any) => {
  return (
    <div>
      <div className="m-4 flex  justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold"> {title}</h1>
          <p className="text-lg"> {subtitle}</p>
          <div className="flex justify-center">
            {primaryAction && (
              <Button className=" mt-4 flex text-lg" onClick={() => primaryAction.cB()} variant={primaryAction.variant}>
                {primaryAction.title}
              </Button>
            )}
            {secondaryAction && (
              <Button
                className=" mt-4 flex text-lg"
                onClick={() => secondaryAction.cB()}
                variant={secondaryAction.variant}>
                {secondaryAction.title}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundComponent
