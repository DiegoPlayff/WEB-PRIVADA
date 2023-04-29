import React from "react";

import { Img, Input, Text, Line, Button, Slider, List } from "components";
import { CloseSVG } from "../../assets/images";

const CustomisedOrderStatusPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                src="images/img_group.svg"
                className="h-[35px] w-[13%]"
                alt="Group"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="InputField"
                placeholder="Search Items, Customer etc"
                prefix={
                  <Img
                    src="images/img_search_black_900.svg"
                    className="cursor-pointer m-3"
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
                size="smSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                <div className="md:h-9 h-[35px] mb-1 relative w-9">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute bottom-[0] h-8 left-[0] w-8"
                    alt="notification"
                  />
                  <Text
                    className="absolute bg-red_700 border border-blue_gray_50 border-solid font-semibold h-[18px] pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-left text-white_A700 top-[0] w-[18px]"
                    variant="body5"
                  >
                    2
                  </Text>
                </div>
              </div>
              <div className="border border-blue_A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                <Img
                  src="images/img_profileimglarg.png"
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  alt="ProfileImgLarg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[1181px] h-[980px] max-w-[1408px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-4 h-full items-center justify-start ml-auto my-auto w-[77%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="font-semibold text-gray_900_01 text-left w-auto"
                variant="body1"
              >
                Orders
              </Text>
              <div className="sm:h-24 h-[50px] relative w-[38%] sm:w-full">
                <div className="absolute border border-blue_gray_100 border-solid flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto pb-1 w-full">
                  <div className="flex flex-col items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body2"
                    >
                      All
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center sm:ml-[0] ml-[140px] self-stretch w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body2"
                    >
                      Completed
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center sm:ml-[0] ml-[30px] self-stretch w-auto">
                    <Text
                      className="font-medium text-blue_gray_400 text-left w-auto"
                      variant="body2"
                    >
                      Canceled
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-start left-[17%] my-auto self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start p-2.5 w-full">
                    <Text
                      className="font-medium text-blue_A700 text-left w-auto"
                      variant="body2"
                    >
                      Pending
                    </Text>
                  </div>
                  <Line className="bg-blue_A700 h-0.5 w-full" />
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col md:gap-10 gap-[729px] justify-start pb-[30px] rounded-lg shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray_50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3.5 w-full">
                  <Text
                    className="font-medium text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Item
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[156px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Order ID
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[74px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Order BY
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[87px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Date
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[63px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Total Paid
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[73px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-medium sm:ml-[0] ml-[85px] mr-[30px] text-blue_gray_600 text-left w-auto"
                    variant="body2"
                  >
                    Status
                  </Text>
                </div>
                <Line className="bg-blue_gray_100 h-px w-full" />
              </div>
              <div className="flex flex-row gap-2 items-center justify-start ml-auto self-stretch w-auto">
                <Button
                  className="cursor-pointer flex h-8 items-center justify-center w-8"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbFillBluegray30087"
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="h-6"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-bold font-gilroy h-8 text-blue_A700 text-center text-sm w-8"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBlueA700_1"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-bold font-gilroy h-8 text-blue_gray_400 text-center text-sm w-8"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-semibold font-sfprotext h-8 text-blue_gray_400 text-center text-sm w-8"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  ...
                </Button>
                <Button
                  className="cursor-pointer font-bold font-gilroy h-8 text-blue_gray_400 text-center text-sm w-8"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  9
                </Button>
                <Button
                  className="cursor-pointer font-bold font-gilroy h-8 text-blue_gray_400 text-center text-sm w-8"
                  shape="RoundedBorder3"
                  size="md"
                  variant="OutlineBluegray100"
                >
                  10
                </Button>
                <Button
                  className="cursor-pointer flex h-8 items-center justify-center w-8"
                  onClick={() => sliderRef.current?.slideNext?.()}
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbOutlineBluegray100_1"
                >
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-6"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Slider
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="absolute inset-[0] justify-center m-auto w-full"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="flex-col gap-[23px] grid mx-2.5"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ One"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ Two"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ Three"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ Four"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ Five"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          src="images/img_unsplashenrurz.png"
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          alt="unsplashEnrurZ Six"
                        />
                        <Text
                          className="font-semibold text-blue_gray_900 text-left w-auto"
                          variant="body2"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[30px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="font-medium ml-8 md:ml-[0] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[31px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[60px] text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="font-medium leading-[26.00px] md:ml-[0] ml-[49px] text-blue_gray_900 text-left w-[15%] sm:w-full"
                        variant="body2"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] text-amber_500 text-center text-sm w-auto"
                        shape="RoundedBorder6"
                        size="sm"
                        variant="OutlineAmber500"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray_100 h-px w-full" />
                  </div>
                </List>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return <div className="" />;
              }
              return <div className="" role="button" tabIndex={0} />;
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomisedOrderStatusPage;
