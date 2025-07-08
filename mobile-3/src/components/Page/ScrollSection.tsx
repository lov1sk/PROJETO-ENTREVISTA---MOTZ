import { ScrollView, ScrollViewProps, View, ViewProps } from "react-native";

interface PageScrollSectionProps extends ScrollViewProps {}
export function PageScrollSection({
  children,
  ...props
}: PageScrollSectionProps) {
  return <ScrollView {...props}>{children}</ScrollView>;
}
