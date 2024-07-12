import { GraphQLResolveInfo } from "graphql";

const getSelections = (info: GraphQLResolveInfo) => {
  const selections = info.fieldNodes[0].selectionSet?.selections || [];
  return selections;
};

export const extractSelection = (info: GraphQLResolveInfo) => {
  const selections = getSelections(info);
  if (!selections.length) return [];

  return selections.reduce<string[]>((initialValue, selection) => {
    if (selection.kind === "Field") {
      return [...initialValue, selection.name.value];
    }
    return initialValue;
  }, []);
};
