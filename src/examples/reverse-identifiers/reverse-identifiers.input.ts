type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray): string {
  if (typeof name === "string") {
    return name;
  } else {
    return name.join(" ");
  }
}

const greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
alert(greetingMessage);
