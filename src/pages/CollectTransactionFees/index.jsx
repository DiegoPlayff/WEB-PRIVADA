import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const CollectTransactionFeesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[82px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white_A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                src="images/img_group_35X162.svg"
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
                    src="images/img_arrowdown.svg"
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
                    src="images/img_arrowdown.svg"
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
        <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg shadow-bs1 w-[68%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-4 w-[97%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-medium text-black_900_01 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Payment Options
                </Text>
                <Line className="bg-blue_gray_100 h-px w-full" />
              </div>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-col items-center justify-start mt-7 p-4 rounded w-full">
                <div className="flex flex-col gap-[30px] justify-start my-2 w-full">
                  <div className="flex flex-row font-gilroy gap-4 items-center justify-start md:pr-10 sm:pr-5 pr-[577px] w-full">
                    <Img
                      src="images/img_radiobutton.svg"
                      className="h-9 w-9"
                      alt="RadioButton"
                    />
                    <div className="flex flex-row gap-4 items-end justify-center w-[71%]">
                      <Img
                        src="images/img_cut.svg"
                        className="h-[34px] w-[37%]"
                        alt="cut"
                      />
                      <Text
                        className="font-medium mb-0.5 mt-2 text-black_900_01 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Paypal
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium font-opensans md:ml-[0] ml-[52px] mr-[202px] text-base text-center text-white_A700 w-[500px]"
                    shape="RoundedBorder3"
                    size="xl"
                    variant="FillBlueA700"
                  >
                    Pay $1120.58
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_gray_100 border-solid flex md:flex-col flex-row gap-4 items-center justify-between mt-6 p-4 rounded w-full">
                <Img
                  src="images/img_search.svg"
                  className="h-9 md:mt-0 my-2 w-9"
                  alt="search"
                />
                <div className="flex md:flex-1 flex-row gap-4 items-center justify-start pr-1 py-1 w-auto md:w-full">
                  <Img
                    src="images/img_image46.png"
                    className="h-4 md:h-auto object-cover w-[7%]"
                    alt="imageFortySix"
                  />
                  <Text
                    className="font-medium text-black_900_01 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    UPI
                  </Text>
                </div>
              </div>
              <List
                className="flex-col gap-6 grid items-center mt-6 w-full"
                orientation="vertical"
              >
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    src="images/img_search.svg"
                    className="h-9 md:mt-0 my-2 w-9"
                    alt="search One"
                  />
                  <Img
                    src="images/img_paymentmethod.svg"
                    className="h-[30px] w-auto"
                    alt="PaymentMethod"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start pr-[5px] pt-[5px] w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Google Pay
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    src="images/img_search.svg"
                    className="h-9 md:mt-0 my-2 w-9"
                    alt="search Two"
                  />
                  <Img
                    src="images/img_amazonpng51.png"
                    className="sm:flex-1 h-[34px] md:h-auto object-cover w-auto sm:w-full"
                    alt="amazonPNGFiftyOne"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start pr-1.5 pt-1.5 w-auto md:w-full">
                    <Text
                      className="font-medium text-black_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Amazon Pay
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    src="images/img_search.svg"
                    className="h-9 my-2 w-9"
                    alt="search Three"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[23%]">
                    <Img
                      src="images/img_computer.svg"
                      className="h-[34px] w-[27%]"
                      alt="computer"
                    />
                    <Text
                      className="font-medium mb-0.5 mt-2 text-black_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Net Banking
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border border-blue_gray_100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    src="images/img_search.svg"
                    className="h-9 my-2 w-9"
                    alt="search Four"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[29%]">
                    <Img
                      src="images/img_offer.svg"
                      className="h-[34px] w-[21%]"
                      alt="offer"
                    />
                    <Text
                      className="font-medium mb-0.5 mt-2 text-black_900_01 text-left w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Cash on Delivery
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start md:mt-0 mt-3 w-[32%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[67%] md:w-full">
              <Img
                src="images/img_check1.png"
                className="h-[100px] md:h-auto object-cover w-[100px]"
                alt="checkOne"
              />
              <Text
                className="font-bold mt-[11px] text-blue_gray_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Thank You!
              </Text>
              <Text
                className="font-semibold mt-4 text-blue_gray_900 text-left w-auto"
                variant="body1"
              >
                Your transaction was successful
              </Text>
            </div>
            <div className="flex flex-col items-center justify-end py-[5px] w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Transaction ID:
                </Text>
                <Text
                  className="font-medium text-blue_gray_900 text-left w-auto"
                  variant="body1"
                >
                  21204034879
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[21px] w-full">
                <Text
                  className="font-medium mt-[5px] text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Date and Time:
                </Text>
                <Text
                  className="font-medium leading-[29.00px] text-blue_gray_900 text-right w-auto"
                  variant="body1"
                >
                  April 30, 2022 at 4:46 pm
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-4 w-full">
                <Text
                  className="font-medium mt-[5px] text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  TO:
                </Text>
                <Text
                  className="font-medium leading-[29.00px] text-blue_gray_900 text-right"
                  variant="body1"
                >
                  <>
                    Angelyn Weiner
                    <br />
                    (HDFC Bank)
                  </>
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Amount:
                </Text>
                <Text
                  className="font-medium text-blue_A700 text-left w-auto"
                  variant="body1"
                >
                  $20000
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Transaction Fees:
                </Text>
                <Text
                  className="font-medium text-blue_A700 text-left w-auto"
                  variant="body1"
                >
                  $200
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                <Text
                  className="font-medium text-blue_gray_400 text-left w-auto"
                  variant="body1"
                >
                  Total:
                </Text>
                <Text
                  className="font-bold text-blue_A700 text-left w-auto"
                  variant="body1"
                >
                  $20200
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectTransactionFeesPage;
