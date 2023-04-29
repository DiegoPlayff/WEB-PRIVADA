import React from "react";

import { Img, Input, Text, Slider, PagerIndicator } from "components";
import { CloseSVG } from "../../assets/images";

const TestimonialsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[431px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_31.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer my-4 mx-3"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer my-auto"
                    onClick={() => setInputvalue("")}
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="srcRoundedBorder6"
                size="mdSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-[9px] text-gray_900_05 text-left w-auto"
                    variant="body2"
                  >
                    Orders
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_901.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="font-medium sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-gray_900_05 text-left w-auto"
                  variant="body2"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="font-medium ml-4 text-gray_900_05 text-left w-auto"
                    variant="body2"
                  >
                    More
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_901.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                src="images/img_cart.svg"
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1268px] mx-auto pt-1.5 md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-blue_gray_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Testimonials
            </Text>
            <div className="flex flex-row gap-8 items-center justify-between w-[9%]">
              <Img
                src="images/img_file_40X40.svg"
                className="h-10 w-10"
                alt="file"
              />
              <Img
                src="images/img_clock_40X40.svg"
                className="h-10 w-10"
                alt="clock"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 2 },
                1050: { items: 3 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-start justify-start mx-2.5 p-6 sm:px-5 rounded-md">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Img
                        src="images/img_rectangle729.png"
                        className="h-20 md:h-auto object-cover w-20"
                        alt="Rectangle729"
                      />
                      <div className="flex flex-row items-center justify-evenly w-auto">
                        <Img
                          src="images/img_star_32X32.svg"
                          className="h-8 w-8"
                          alt="star"
                        />
                        <Img
                          src="images/img_star_32X32.svg"
                          className="h-8 w-8"
                          alt="star One"
                        />
                        <Img
                          src="images/img_star_32X32.svg"
                          className="h-8 w-8"
                          alt="star Two"
                        />
                        <Img
                          src="images/img_airplane_32X32.svg"
                          className="h-8 w-8"
                          alt="airplane"
                        />
                        <Img
                          src="images/img_star_2.svg"
                          className="h-8 w-8"
                          alt="star Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-medium mt-[25px] text-black_900_01 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="font-normal leading-[29.00px] mt-4 not-italic text-blue_gray_400 text-left w-full"
                      variant="body1"
                    >
                      “Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Amet minim mollit non deserunt ullamco est sit
                      aliqua dolor do amet sint. Velit officia consequat duis
                      enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.
                    </Text>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_A700 w-2" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray_100 w-2"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex h-2 justify-center w-14"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_A700 w-2"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray_100 w-2"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[8.00px] sm:ml-[0]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
