import { ISocials, ISupport } from "../interfaces/structures";

export type FooterInformation = ISocials | ISupport;

export type IconComponent =
  | React.FunctionComponent<IconComponent>
  | React.ComponentClass<IconComponent>;
