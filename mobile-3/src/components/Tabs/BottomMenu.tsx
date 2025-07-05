import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import HelpAvatar from "@/assets/HelpAvatar.png";

export default function BottomMenu() {
  const fakeMenuItems = ["Início", "Carteira", "", "Notificações", "Cadastro"];
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {fakeMenuItems.map((label, index) => {
          if (label === "") {
            return (
              <View key={index} style={styles.avatarWrapper}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={HelpAvatar} // troque pela imagem real
                    style={styles.avatar}
                  />
                  <Text style={styles.label}>AJUDA</Text>
                </View>
              </View>
            );
          }
          return (
            <TouchableOpacity key={index} style={styles.item}>
              {/* Substitua por ícones reais */}
              <View style={styles.fakeIcon} />
              <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    height: 87,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
  },
  item: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 10,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#333",
  },
  fakeIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "orange",
  },
  avatarWrapper: {
    width: 70,
    alignItems: "center",
    marginTop: -40,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#fff",
  },
});
