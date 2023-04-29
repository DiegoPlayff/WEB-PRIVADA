import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const FanWallPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-20 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                src="images/img_group10392_18.svg"
                className="h-[35px] w-[13%]"
                alt="Group10392"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 w-2/5 md:w-full"
                className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                name="Group10270"
                placeholder="Search"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      onClick={() => setInputvalue("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="mt-4 mb-[15px] cursor-pointer ml-[35px] mr-4"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder6"
                size="mdSrc"
                variant="srcOutlineBluegray300"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_900_05 text-left w-auto"
                    variant="body2"
                  >
                    Products
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="font-medium mt-[3px] text-gray_900_05 text-left w-auto"
                    variant="body2"
                  >
                    Resouces
                  </Text>
                  <Img
                    src="images/img_arrowdown_gray_902.svg"
                    className="h-6 w-6"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="font-medium sm:mt-0 mt-[5px] text-gray_900_05 text-left w-auto"
                  variant="body2"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                src="images/img_profileimglarg.png"
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[39px] items-center justify-start md:px-5 w-[58%] md:w-full">
          <div className="md:h-9 h-[39px] pt-1 relative w-[74%] md:w-full">
            <Line className="absolute bg-gray_300_01 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
            <div className="absolute bottom-[0] flex flex-col gap-[18px] items-center justify-start left-[0] w-[11%]">
              <Text
                className="font-medium text-blue_A700 text-left w-auto"
                variant="body2"
              >
                Home
              </Text>
              <Line className="bg-blue_A700 h-0.5 w-full" />
            </div>
            <div className="absolute flex flex-row items-center justify-between right-[0] top-[0] w-[77%]">
              <Text
                className="font-medium text-blue_gray_400 text-left w-auto"
                variant="body1"
              >
                About
              </Text>
              <Text
                className="font-medium text-blue_gray_400 text-left w-auto"
                variant="body1"
              >
                Photos
              </Text>
              <Text
                className="font-medium text-blue_gray_400 text-left w-auto"
                variant="body1"
              >
                Reviews
              </Text>
              <Text
                className="font-medium text-blue_gray_400 text-left w-auto"
                variant="body1"
              >
                Videos
              </Text>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col gap-[30px] justify-start p-[30px] sm:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between pb-[5px] w-[98%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start rounded-[48px] w-auto md:w-full">
                  <Img
                    src="images/img_profileimglarg_2.png"
                    className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                    alt="ProfileImgLarg One"
                  />
                  <Text
                    className="font-semibold text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    Benito Nickel
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[26.00px] not-italic text-blue_gray_400 text-left w-auto"
                  variant="body2"
                >
                  It was amazing feel to use this feature as it ease workflow
                  and saving much time. I would like to recommended it to thee
                  fullest.
                </Text>
                <div className="flex flex-col gap-[22px] items-end justify-start w-auto md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      src="images/img_star.svg"
                      className="h-8 w-8"
                      alt="star"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-8 w-8"
                      alt="star One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-8 w-8"
                      alt="star Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-8 w-8"
                      alt="star Three"
                    />
                    <Img
                      src="images/img_star_32X32.svg"
                      className="h-8 w-8"
                      alt="star Four"
                    />
                  </div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body2"
                  >
                    1 month ago
                  </Text>
                </div>
              </div>
              <List
                className="flex-col gap-4 grid items-center pt-[7px] px-[7px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between pb-[5px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start rounded-[40.5px] w-auto md:w-full">
                    <Img
                      src="images/img_profileimglarg_50X50.png"
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      alt="ProfileImgLarg Two"
                    />
                    <Text
                      className="font-semibold text-blue_gray_900 text-left w-auto"
                      variant="body2"
                    >
                      Kai Caudle
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[26.00px] md:mt-0 mt-[11px] not-italic text-blue_gray_400 text-left w-auto"
                    variant="body2"
                  >
                    It was amazing feel to use this feature as it ease workflow
                    and saving much time. I would like to recommended it to thee
                    fullest.
                  </Text>
                  <div className="flex flex-col gap-[22px] items-end justify-start md:mt-0 mt-0.5 w-auto md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Five"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star One"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Two"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Three"
                      />
                      <Img
                        src="images/img_star_32X32.svg"
                        className="h-8 w-8"
                        alt="star Four"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      1 month ago
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between pb-[5px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start rounded-[39px] w-auto md:w-full">
                    <Img
                      src="images/img_profileimglarg_5.png"
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      alt="ProfileImgLarg Three"
                    />
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      Man Marin
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[26.00px] md:mt-0 mt-[11px] not-italic text-blue_gray_400 text-left w-auto"
                    variant="body2"
                  >
                    It was amazing feel to use this feature as it ease workflow
                    and saving much time. I would like to recommended it to thee
                    fullest.
                  </Text>
                  <div className="flex flex-col gap-[22px] items-end justify-start md:mt-0 mt-0.5 w-auto md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Six"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star One One"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Two One"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Three One"
                      />
                      <Img
                        src="images/img_star_32X32.svg"
                        className="h-8 w-8"
                        alt="star Four One"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      1 month ago
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start rounded-[44.5px] w-auto md:w-full">
                    <Img
                      src="images/img_profileimglarg_6.png"
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      alt="ProfileImgLarg Four"
                    />
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      Anton Ligon
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[26.00px] md:mt-0 mt-[11px] not-italic text-blue_gray_400 text-left w-auto"
                    variant="body2"
                  >
                    It was amazing feel to use this feature as it ease workflow
                    and saving much time. I would like to recommended it to thee
                    fullest.
                  </Text>
                  <div className="flex md:flex-1 flex-col gap-[22px] items-end justify-start md:mt-0 mt-0.5 w-auto md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Seven"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star One Two"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Two Two"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Three Two"
                      />
                      <Img
                        src="images/img_star_32X32.svg"
                        className="h-8 w-8"
                        alt="star Four Two"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      1 month ago
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray_100 w-full" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start rounded-[48px] w-auto md:w-full">
                    <Img
                      src="images/img_profileimglarg.png"
                      className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                      alt="ProfileImgLarg Five"
                    />
                    <Text
                      className="font-semibold text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      Rose J Henry
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[26.00px] md:mt-0 mt-[11px] not-italic text-blue_gray_400 text-left w-auto"
                    variant="body2"
                  >
                    It was amazing feel to use this feature as it ease workflow
                    and saving much time. I would like to recommended it to thee
                    fullest.
                  </Text>
                  <div className="flex md:flex-1 flex-col gap-[22px] items-end justify-start md:mt-0 mt-0.5 w-auto md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Eight"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star One Three"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Two Three"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="h-8 w-8"
                        alt="star Three Three"
                      />
                      <Img
                        src="images/img_star_32X32.svg"
                        className="h-8 w-8"
                        alt="star Four Three"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-auto"
                      variant="body2"
                    >
                      1 month ago
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-row font-sfprotext gap-2 items-center justify-end ml-auto w-[36%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillGray50001"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-6"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="cursor-pointer font-bold h-8 text-blue_A700 text-center text-sm w-8"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBlueA700_1"
              >
                1
              </Button>
              <Button
                className="cursor-pointer font-bold h-8 text-blue_gray_400_02 text-center text-sm w-8"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBluegray100"
              >
                2
              </Button>
              <Button
                className="cursor-pointer font-bold h-8 text-blue_gray_400_02 text-center text-sm w-8"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBluegray100"
              >
                ...
              </Button>
              <Button
                className="cursor-pointer font-bold h-8 text-blue_gray_400_02 text-center text-sm w-8"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBluegray100"
              >
                9
              </Button>
              <Button
                className="cursor-pointer font-bold h-8 text-blue_gray_400_02 text-center text-sm w-8"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineBluegray100"
              >
                10
              </Button>
              <Button
                className="flex h-8 items-center justify-center w-8"
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
      </div>
    </>
  );
};

export default FanWallPage;
