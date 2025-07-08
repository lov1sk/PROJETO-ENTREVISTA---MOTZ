import { colors } from "@/theme/colors";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

interface FlatListPagingProps<T> {
  listData: T[];
  currentListIndex: number;
  handleNextItem: () => void;
  handlePreviousItem: () => void;
}
export function FlatListPaging<T>({
  listData,
  currentListIndex,
  handleNextItem,
  handlePreviousItem,
}: FlatListPagingProps<T>) {
  const isFirstItem = currentListIndex === 0;
  const isLastItem = listData.length - 1 === currentListIndex;
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        gap: 16,
        marginTop: 16,
      }}
    >
      <TouchableOpacity onPress={handlePreviousItem} disabled={isFirstItem}>
        {!isFirstItem && (
          <ArrowLeft size={24} strokeWidth={3} color={colors.theme.orange} />
        )}
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 6 }}>
        {listData.map((_, index) => {
          const isActive = index === currentListIndex;
          return (
            <View
              key={index}
              style={{
                width: isActive ? 24 : 10,
                height: 10,
                borderRadius: 6,
                backgroundColor: isActive ? colors.theme.orange : "#B0B0B0",
              }}
            />
          );
        })}
      </View>

      <TouchableOpacity onPress={handleNextItem} disabled={isLastItem}>
        {!isLastItem && (
          <ArrowRight size={24} strokeWidth={3} color={colors.theme.orange} />
        )}
      </TouchableOpacity>
    </View>
  );
}
