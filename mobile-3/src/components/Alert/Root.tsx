import { X } from "lucide-react-native";
import { Modal, ModalProps, StyleSheet, View } from "react-native";

interface AlertRootProps extends ModalProps {
  visible: boolean;
  onClose: () => void;
}
export function AlertRoot({
  visible = false,
  onClose,
  children,
  ...props
}: AlertRootProps) {
  return (
    <Modal transparent visible={visible} animationType="fade" {...props}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "flex-end",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            padding: 24,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: "100%",
            elevation: 5,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <X size={24} onPress={onClose} />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
