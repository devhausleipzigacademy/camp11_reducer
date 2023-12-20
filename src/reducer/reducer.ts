type Action = {
  type: "incremented_count" | "change_text";
  countAmount?: number;
};

type State = {
  count: number;
  text: string;
};

export function reducer(state: State, action: Action) {
  if (action.type === "incremented_count") {
    return {
      ...state,
      count: state.count + (action.countAmount || 1),
    };
  }
  if (action.type === "change_text") {
    return {
      ...state,
      text: "bye",
    };
  }
  throw Error("Unknown action.");
}
