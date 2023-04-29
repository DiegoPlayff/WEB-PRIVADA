import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const QuoteManagementPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50_02 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  src="images/img_group_9.svg"
                  className="h-[35px] w-[13%]"
                  alt="Group"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e)}
                  wrapClassName="flex md:flex-1 gap-3 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  className="font-medium p-0 placeholder:text-blue_gray_200 text-base text-blue_gray_200 text-left w-full"
                  name="InputField"
                  placeholder="Search"
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
                    src="images/img_profileimglarg_85X85.png"
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between max-w-[1390px] mx-auto md:px-5 w-full">
            <aside className="flex flex-col md:hidden justify-start w-[300px]">
              <div className="bg-white_A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        src="images/img_save.svg"
                        className="h-6 ml-[7px] w-6"
                        alt="save"
                      />
                      <Text
                        className="font-semibold text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-6 w-6"
                        alt="user"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        src="images/img_grid.svg"
                        className="h-6 w-6"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        src="images/img_edit.svg"
                        className="h-6 w-6"
                        alt="edit"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        src="images/img_bag.svg"
                        className="h-6 w-6"
                        alt="bag"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue_A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[78%]">
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-6 w-6"
                        alt="videocamera"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_A700 text-left w-auto"
                        variant="body2"
                      >
                        Quote Management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        src="images/img_notification.svg"
                        className="h-6 w-6"
                        alt="notification One"
                      />
                      <Text
                        className="font-semibold mt-[3px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        src="images/img_settings.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                        variant="body2"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      src="images/img_question.svg"
                      className="h-6 w-6"
                      alt="question"
                    />
                    <Text
                      className="font-semibold mt-[5px] text-blue_gray_700 text-left w-auto"
                      variant="body2"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-[30px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
                    <Text
                      className="font-semibold mb-[3px] mt-[9px] text-gray_900_01 text-left w-auto"
                      variant="body1"
                    >
                      Quotes Management
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[90px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_forward.svg"
                          className="ml-3 mr-2 my-[9px]"
                          alt="forward"
                        />
                      }
                      shape="RoundedBorder6"
                      size="md"
                      variant="FillBlueA700"
                    >
                      <div className="font-medium text-left text-sm text-white_A700">
                        Action
                      </div>
                    </Button>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                      <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1 w-auto">
                          <Text
                            className="font-medium text-blue_gray_400 text-left w-auto"
                            variant="body2"
                          >
                            Quotes Count
                          </Text>
                          <Text
                            className="font-bold mb-0.5 text-gray_900_01 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            870
                          </Text>
                        </div>
                        <Img
                          src="images/img_chartsmicro.svg"
                          className="h-[45px] w-[54%]"
                          alt="Chartsmicro"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                      <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1 w-auto">
                          <Text
                            className="font-medium text-blue_gray_400 text-left w-auto"
                            variant="body2"
                          >
                            Total Clicks
                          </Text>
                          <Text
                            className="font-bold mb-0.5 text-gray_900_01 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            3.5k
                          </Text>
                        </div>
                        <Img
                          src="images/img_chartsmicro.svg"
                          className="h-[45px] w-[54%]"
                          alt="Chartsmicro One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                      <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] items-start justify-start pr-1 py-1 w-auto">
                          <Text
                            className="font-medium text-blue_gray_400 text-left w-auto"
                            variant="body2"
                          >
                            Total Visits
                          </Text>
                          <Text
                            className="font-bold text-gray_900_01 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            5,732
                          </Text>
                        </div>
                        <Img
                          src="images/img_chartsmicro.svg"
                          className="h-[45px] w-[54%]"
                          alt="Chartsmicro Two"
                        />
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="flex-col gap-6 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-4 items-center justify-end p-0.5 rounded-md shadow-bs2 w-full">
                    <Img
                      src="images/img_ellipse91.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="EllipseNinetyOne"
                    />
                    <div className="flex md:flex-1 flex-col gap-2 items-start justify-end md:mt-0 my-3.5 pr-1 py-1 w-auto md:w-full">
                      <Text
                        className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Mattis sit tortor nibh diam velit tempor, mi.”{" "}
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        - Ali Comer
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start p-4 rounded-md shadow-bs2 w-full">
                    <Img
                      src="images/img_ellipse92.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="EllipseNinetyOne One"
                    />
                    <div className="flex md:flex-1 flex-col gap-2 items-start justify-end pr-1 py-1 w-auto md:w-full">
                      <Text
                        className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Mattis sit tortor nibh diam velit tempor, mi.”{" "}
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        - Carmelo Rousseau
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start p-4 rounded-md shadow-bs2 w-full">
                    <Img
                      src="images/img_profileimglarg_85X85.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="EllipseNinetyOne Two"
                    />
                    <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pr-[5px] pt-[5px] w-auto md:w-full">
                      <Text
                        className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Mattis sit tortor nibh diam velit tempor, mi.”{" "}
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        - Rose J. Henry
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start p-4 rounded-md shadow-bs2 w-full">
                    <Img
                      src="images/img_ellipse91_40X40.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="EllipseNinetyOne Three"
                    />
                    <div className="flex md:flex-1 flex-col gap-2 items-start justify-end pr-1 py-1 w-auto md:w-full">
                      <Text
                        className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Mattis sit tortor nibh diam velit tempor, mi.”{" "}
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        - Kai Caudle
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start p-4 rounded-md shadow-bs2 w-full">
                    <Img
                      src="images/img_ellipse94.png"
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      alt="EllipseNinetyOne Four"
                    />
                    <div className="flex md:flex-1 flex-col gap-2 items-start justify-end pr-[3px] py-[3px] w-auto md:w-full">
                      <Text
                        className="font-normal not-italic text-blue_gray_900 text-left w-auto"
                        variant="body2"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Mattis sit tortor nibh diam velit tempor, mi.”{" "}
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_400 text-left w-auto"
                        variant="body4"
                      >
                        - Man Marin
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Button
                className="cursor-pointer font-medium text-center text-lg text-white_A700 w-[504px]"
                shape="RoundedBorder6"
                size="xl"
                variant="FillBlueA700"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteManagementPage;
