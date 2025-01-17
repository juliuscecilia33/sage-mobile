import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Home" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="journey/[id]" />
      <Stack.Screen name="playground/[id]" />
      <Stack.Screen name="battle/character_select/[id]" />
      <Stack.Screen name="playground/units/creation_story/IntroScreen" />
      <Stack.Screen name="playground/units/creation_story/Modules" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.0/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.1/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.1/1.1.2/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.2/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.3/[id]" />
    </Stack>
  );
}
