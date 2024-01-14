import React from "react"
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialog,
} from "../ui/alert-dialog"
import { Button, buttonVariants } from "../ui/button"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { cn } from "~/lib/utils"
import { toggleOpenPinCodeModal } from "~/app/store/features/ui/all-dialog.slice"
import InputField from "../login/input-field"
import { useForm } from "react-hook-form"
import { PinCodeForm, PinCodeSubmitHandler } from "./schema"
import { storeLocation } from "~/app/store/features/geo-location/location.slice"

const GetLocationPinCode: React.FC = () => {
  const isModalOpen = useAppSelector((state) => state.allDialog.openPinCodeModal)
  const locationDetails = useAppSelector((state) => state.geoLocation)
  console.log("locationDetails: ", locationDetails)
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PinCodeForm>()
  console.log("errors: ", errors)

  const onSubmit: PinCodeSubmitHandler = (data) => {
    // Perform actions with the form data, for example, make an API request
    console.log("Form data submitted:", data)

    dispatch(
      storeLocation({
        coords: locationDetails.coords,
        address: {
          ...locationDetails.address,
          postcode: data.pincode,
        },
      }),
    )
    dispatch(toggleOpenPinCodeModal())
  }

  return (
    <AlertDialog open={isModalOpen}>
      <AlertDialogContent className="w-full">
        <div className="absolute right-2 top-2">
          <AlertDialogCancel
            onClick={() => dispatch(toggleOpenPinCodeModal())}
            className={buttonVariants({ variant: "link", size: "icon" }) + "absolute right-0"}>
            x
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <p className="pb-2 text-center text-3xl font-semibold tracking-tight transition-colors">
              We want to <br />
              know you closely 😎
            </p>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2.5">
            <InputField label="Pincode" id="pincode" type="number" field="pincode" errors={errors} control={control} />
          </div>

          <div className="my-4 mb-4 flex justify-center">
            <Button
              type="submit"
              className={cn(buttonVariants({ variant: "secondary" }))}
              // disabled={isLoading}
            >
              {/* {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} */}
              Submit
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default GetLocationPinCode
