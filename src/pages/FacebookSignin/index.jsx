import React from "react";

import { Img, Text, Input, Button, Line } from "components";

const FacebookSigninPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy items-center justify-start mx-auto p-[186px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[132px] w-1/2 md:w-full">
          <Img
            src="images/img_group_2.svg"
            className="h-[35px] w-[31%]"
            alt="Group"
          />
          <Text
            className="mt-[62px] text-blue_gray_900 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="font-medium text-blue_gray_900 text-left w-auto"
                variant="body1"
              >
                Email
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                type="email"
                name="Group10198"
                placeholder="Enter Email"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="font-medium text-blue_gray_900 text-left w-auto"
                variant="body1"
              >
                Password
              </Text>
              <Input
                wrapClassName="w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                type="password"
                name="Group10198 One"
                placeholder="Enter Password"
                shape="RoundedBorder6"
                size="lg"
                variant="OutlineBluegray100"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="font-medium md:ml-[0] ml-[381px] mt-[15px] text-blue_A700 text-left text-lg w-auto"
            >
              <Text className="">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center text-white_A700 w-auto"
              shape="RoundedBorder6"
              size="xl"
              variant="FillBlueA700"
            >
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-blue_gray_200 text-left w-auto"
              >
                <Text className="">Or continue with</Text>
              </a>
              <Line className="bg-blue_gray_200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-[29px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[256px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_instagram_1.png"
                    className="ml-[35px] mr-2 my-[13px]"
                    alt="instagram 1"
                  />
                }
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBlueA700"
              >
                <div className="font-medium text-base text-blue_A700 text-left">
                  Instagram
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[256px] w-auto"
                leftIcon={
                  <div className="h-6 ml-[35px] mr-2 pt-1 pl-[9px] pr-[3px] w-6 bg-blue_700 rounded-[3px] my-[13px] flex justify-center items-center">
                    <Img
                      src="images/img_facebook.svg"
                      className=""
                      alt="facebook"
                    />
                  </div>
                }
                shape="RoundedBorder6"
                size="xl"
                variant="OutlineBlueA700"
              >
                <div className="font-medium text-base text-blue_A700 text-left">
                  Facebook
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookSigninPage;
