import { Img, P, Section } from "../style";
import thanksImg from "../assets/images/icon-thank-you.svg";

export function ThankYou() {
    return (
        <Section>
            <Img
                width="100px"
                height="100px"
                src={thanksImg}
                alt="Thank you icon"
            />
            <P size="2rem" sm_size="1.5rem" color="hsl(213, 96%, 18%)">
                Thank you!
            </P>
            <P size="1.3rem" sm_size="0.95rem" weight="300" align="center">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </P>
        </Section>
    );
}
