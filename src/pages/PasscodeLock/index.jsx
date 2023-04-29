import React from "react";

import { Img, Text, Input } from "components";

const PasscodeLockPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray_50_01 bg-no-repeat flex flex-col font-gilroy h-[1080px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_passcodelock.png')" }}
      >
        <div className="bg-black_900_7f flex flex-col items-center justify-start p-[332px] md:px-10 sm:px-5 w-full">
          <div className="bg-gradient1  md:h-[111px] h-[250px] p-[69px] md:px-5 relative rounded-[50%] w-[250px]">
            <Img
              src="images/img_vector.svg"
              className="absolute h-[111px] inset-[0] justify-center m-auto w-[111px]"
              alt="Vector"
            />
          </div>
          <Text
            className="font-medium mt-[34px] text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            DHIWISE
          </Text>
          <Input
            wrapClassName="flex mt-[43px] w-3/5"
            className="font-medium p-0 placeholder:text-white_A700 text-left text-lg text-white_A700 w-full"
            type="password"
            name="password"
            placeholder="**********"
            suffix={
              <Img
                src="images/img_eye_20X20.svg"
                className="mt-[18px] mb-3.5 ml-[35px] mr-3"
                alt="eye"
              />
            }
            shape="RoundedBorder6"
            size="md"
            variant="OutlineBluegray100_1"
          ></Input>
        </div>
      </div>
    </>
  );
};

export default PasscodeLockPage;
