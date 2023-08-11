import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-white py-10 md:w-full md:pb-0">
      {/*Image and main header*/}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/*Main Header*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*Heading*/}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt={"home-page-text"} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Lorem fugiat deserunt laboris nisi culpa et reprehenderit
              voluptate sunt voluptate ullamco proident aliqua id. Id magna sint
              magna nostrud nisi sint nulla laboris esse deserunt proident.
            </p>
          </div>

          {/*Action*/}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setSelectedPage(SelectedPage.ContactUs);
              }}
              href={`#${SelectedPage.ContactUs}`}>
              Learn More
            </AnchorLink>
          </div>
        </div>
        {/*Image*/}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          {" "}
          <img alt={"homepage-graphic"} src={HomePageGraphic} />
        </div>
      </div>
      {/*Sponsor*/}
      {isAboveMediumScreens && (
        <div className={"h-[150px] w-full bg-primary-100 py-10"}>
          <div className="mx-auto w-5/6 ">
            {" "}
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull sponsor" src={SponsorRedBull} />
              <img alt="forbs sponsor" src={SponsorForbes} />
              <img alt="Fortunes sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
