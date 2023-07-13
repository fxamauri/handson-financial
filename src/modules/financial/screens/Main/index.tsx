import { FlatList } from "react-native";
import {
  HeaderContentList,
  FinancialRecordNumberRows,
  ListContent,
} from "./styles";
import { FinancialRecord, FinancialType } from "../../entities/FinancialRecord";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ScreenContent from "../../components/ScreenContent";
import FinancialItem from "../../components/FinancialItem";
import SeparatorItemList from "../../components/SeparatorItemList";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";

const financialRecords: FinancialRecord[] = [
  { title: `1 - conta 1`, type: FinancialType.INCOME },
  { title: `2 - conta 2`, type: FinancialType.EXPENSE },
];
export default function MainScreen() {
  return (
    <Container>
      <Header
        showBackButton
        title="Contas"
        backButtonAction={() => alert("backbutton")}
        headerRight={<AddButton onPress={() => alert("add")} />}
      />
      <ScreenContent>
        <HeaderContentList>
          <Title>Listagem</Title>
          <FinancialRecordNumberRows>27 registros</FinancialRecordNumberRows>
        </HeaderContentList>
        <ListContent>
          <FlatList
            data={financialRecords}
            ItemSeparatorComponent={SeparatorItemList}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <FinancialItem title={item.title} type={item.type} />
            )}
          />
        </ListContent>
      </ScreenContent>
    </Container>
  );
}
