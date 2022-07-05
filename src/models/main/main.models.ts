import { ReactElement } from "react";

export type CurrentPlatformModel = "facebook" | "tik-tok" | "google" | null;

export interface SidebarContentItemPropsModel {
  path: string;
  title: string;
  icon: ReactElement;
}
