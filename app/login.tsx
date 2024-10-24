import { Divider } from "@/components/Divider";
import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";
import { Button } from "@/components/Button";
import { Input } from "@/components/input";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Text } from "@/components/Text";

export default function Login() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <VStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          p={40}
          gap={40}
        >
          <HStack gap={10}>
            <Text fontSize={30} bold mb={20}>
              Sage
            </Text>
            <TabBarIcon name="ticket" size={50} />
          </HStack>
          <VStack w={"100%"} gap={30}>
            <VStack gap={5}>
              <Text ml={10} fontSize={14} color="gray">
                Email
              </Text>
              <Input
                value={email}
                onChange={() => setEmail}
                placeholder="Email"
                placeholderTextColor="darkgray"
                autoCapitalize="none"
                autoCorrect={false}
                h={48}
                p={14}
              />
            </VStack>
            <VStack gap={5}>
              <Text ml={10} fontSize={14} color="gray">
                Password
              </Text>
              <Input
                secureTextEntry
                value={password}
                onChange={() => setPassword}
                placeholder="Password"
                placeholderTextColor="darkgray"
                autoCapitalize="none"
                autoCorrect={false}
                h={48}
                p={14}
              />
            </VStack>
            <Button isLoading={false} onPress={() => {}}>
              {authMode === "login" ? "Login" : "Register"}
            </Button>
          </VStack>

          <Divider w={"90%"} />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
