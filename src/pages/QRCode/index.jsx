import React from "react";

import { Img, Input, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const QRCodePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_5.svg"
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
                    src="images/img_search_black_900.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
                    src="images/img_arrowdown_gray_900.svg"
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
        <div className="flex md:flex-col flex-row gap-[46px] items-start justify-start max-w-[1292px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-end w-[66%] md:w-full">
            <div className="bg-white_A700 flex flex-col md:gap-10 gap-[70px] items-center justify-start p-4 rounded-lg shadow-bs1 w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-[97%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-medium text-black_900_01 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Order Summary
                  </Text>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start pt-1.5 w-[77%] md:w-full">
                  <Img
                    src="images/img_pngwing1.png"
                    className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                    alt="pngwingOne"
                  />
                  <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                    <Text
                      className="font-medium text-black_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Samsung Galaxy M12
                    </Text>
                    <Text
                      className="font-medium mt-[19px] text-blue_gray_400 text-left w-auto"
                      variant="body1"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[23px] w-[23%] md:w-full">
                      <Text
                        className="font-medium text-black_900_01 text-left w-auto"
                        variant="body1"
                      >
                        Color:
                      </Text>
                      <Text
                        className="font-medium ml-1 text-blue_gray_400 text-left w-auto"
                        variant="body1"
                      >
                        Blue
                      </Text>
                    </div>
                    <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[39%] md:w-full">
                      <Text
                        className="font-medium text-black_900_01 text-left w-auto"
                        as="h5"
                        variant="h5"
                      ></Text>
                      <Text
                        className="font-medium line-through mt-[11px] text-blue_gray_400 text-left w-auto"
                        variant="body2"
                      ></Text>
                    </div>
                    <div className="flex flex-row font-gilroy items-center justify-between mt-3 w-full">
                      <div className="flex flex-row items-center justify-evenly w-auto">
                        <Button
                          className="flex h-9 items-center justify-center w-9"
                          shape="icbRoundedBorder4"
                          size="mdIcn"
                          variant="icbOutlineBluegray100"
                        >
                          <Img
                            src="images/img_menu.svg"
                            className="h-4"
                            alt="menu"
                          />
                        </Button>
                        <Button
                          className="cursor-pointer font-bold min-w-[64px] text-black_900_01 text-center text-lg w-auto"
                          shape="RoundedBorder3"
                          size="md"
                          variant="OutlineBluegray400"
                        >
                          1
                        </Button>
                        <Button
                          className="flex h-9 items-center justify-center w-9"
                          shape="icbRoundedBorder4"
                          size="mdIcn"
                          variant="icbOutlineBluegray100"
                        >
                          <Img
                            src="images/img_plus_36X36.svg"
                            className="h-4"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Line className="bg-blue_gray_100 h-6 my-1.5 w-px" />
                      <Text
                        className="font-medium text-black_900_01 text-left w-auto"
                        variant="body1"
                      >
                        Save For Later
                      </Text>
                      <Line className="bg-blue_gray_100 h-6 my-1.5 w-px" />
                      <Text
                        className="font-medium text-left text-red_700 w-auto"
                        variant="body1"
                      >
                        Remove
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-4 w-[97%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="font-medium text-black_900_01 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Delivery Address
                  </Text>
                  <Line className="bg-blue_gray_100 h-px w-full" />
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start mt-[23px] p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-2 w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-between w-[67%] sm:w-full">
                      <Img
                        src="images/img_radiobutton.svg"
                        className="h-9 w-9"
                        alt="RadioButton"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5 w-auto sm:w-full">
                        <div className="flex flex-row gap-4 items-start justify-start w-[43%] md:w-full">
                          <Text
                            className="font-medium mt-[3px] text-black_900_01 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Jone Cooper
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[50px] text-black_900_01 text-center text-sm w-auto"
                            shape="RoundedBorder3"
                            size="sm"
                            variant="FillBluegray100"
                          >
                            Work
                          </Button>
                        </div>
                        <Text
                          className="font-medium text-blue_gray_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-medium sm:mt-0 mt-1 text-blue_A700 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Edit
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-start justify-start mt-6 p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[70%] md:w-full">
                    <Img
                      src="images/img_search.svg"
                      className="h-9 w-9"
                      alt="search"
                    />
                    <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5 w-[89%] sm:w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-[42%] md:w-full">
                        <Text
                          className="font-medium mt-[3px] text-black_900_01 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Jone Cooper
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[54px] text-black_900_01 text-center text-sm w-auto"
                          shape="RoundedBorder3"
                          size="sm"
                          variant="FillBluegray100"
                        >
                          Home
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-black_900_01 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-start justify-start mt-6 p-4 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[62%] md:w-full">
                    <Img
                      src="images/img_search.svg"
                      className="h-9 w-9"
                      alt="search One"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-end pt-[5px] w-[88%] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-auto md:w-full">
                        <Text
                          className="font-medium text-black_900_01 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Jone Cooper
                        </Text>
                      </div>
                      <Text
                        className="font-medium text-black_900_01 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        4140 Parker Rd. Allentown, New Mexico 31134
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  wrapClassName="flex mt-6 w-full"
                  className="font-medium p-0 placeholder:text-black_900_01 text-black_900_01 text-left text-xl w-full"
                  name="Frame9986"
                  placeholder="Add Address"
                  prefix={
                    <Img
                      src="images/img_plus.svg"
                      className="ml-4 mr-6 my-6"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder6"
                  size="xl"
                  variant="OutlineBluegray100"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[66px] w-[31%] md:w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
              <Img
                src="images/img_image79.png"
                className="h-[200px] md:h-auto object-cover w-[200px]"
                alt="imageSeventyNine"
              />
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <Text
                  className="font-semibold text-blue_gray_900 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum
                </Text>
                <Text
                  className="font-medium leading-[26.00px] text-blue_gray_400 text-center w-full"
                  variant="body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  sociis quam nascetur felis in enim. Praesent id vel nisi,
                  adipiscing scelerisque.
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium text-base text-center text-white_A700 w-[396px]"
              shape="RoundedBorder6"
              size="lg"
              variant="FillBlueA700"
            >
              Copy Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCodePage;
