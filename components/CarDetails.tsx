import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
import { CarDetailsProps } from "@/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CarDetails({
  isOpen,
  closeModal,
  car,
}: CarDetailsProps) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <button
              type="button"
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              onClick={closeModal}
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>

            {/* <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image
                  src={generateCarImageUrl(car)}
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "29")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "33")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImageUrl(car, "13")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div> */}

            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-semibold text-xl capitalize">
                {car.make} {car.model}
              </h2>

              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h4 className="text-grey capitalize">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
