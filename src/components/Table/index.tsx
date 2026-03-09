import { Eye, Pencil, Trash } from "lucide-react-native";
import { FlatList, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import ModalVisualize from "../ModalVisualize";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";

type publicationProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
    image: string;
}

type publicationsResponse = {
    publications: publicationProps[];
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
}

type tableProps = {
    data: publicationsResponse;
    refreshPublications: () => void;
}

export default function Table({ data, refreshPublications }: tableProps) {

    const [modalType, setModalType] = useState<"visualize" | "edit" | "delete" | null>(null);
    const [idPublication, setIdPublication] = useState<number | null>(null);
    const [selectedPublication, setSelectedPublication] = useState<publicationProps | null>(null);

    const paginated = data.publications;
   
    return (
        <View style={styles.table}>
            <View style={styles.cabecalho}>
                <View style={styles.cabecalhoProduct}>
                    <Text style={styles.cabecalhoText}>Produto</Text>
                </View>
                <View style={styles.cabecalhoPrice}>
                    <Text style={styles.cabecalhoText}>Preço</Text>
                </View>
                <View style={styles.actions}>
                    <Text style={styles.cabecalhoText}>Ações</Text>
                </View>
            </View>

            <FlatList
                data={paginated}
                renderItem={({ item }) =>
                    <View style={styles.line}>
                        <View style={styles.lineProduct}>
                            <Text style={styles.lineText}>{item.name}</Text>
                        </View>
                        <View style={styles.linePrice}>
                            <Text style={styles.lineText}>R$ {item.price}</Text>
                        </View>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => { setModalType("visualize"); setSelectedPublication(item) }}>
                                <Eye size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalType("edit"); setSelectedPublication(item) }}>
                                <Pencil size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalType("delete"); setIdPublication(item.id) }}>
                                <Trash size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                keyExtractor={(item) => item.id?.toString() ?? ""}
            />

            <ModalVisualize
                publication={selectedPublication}
                visible={modalType === "visualize"}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

            <ModalEdit
                publication={selectedPublication}
                visible={modalType === "edit"}
                onConfirm={() => {
                    setModalType(null);
                    setIdPublication(null);
                    refreshPublications();
                }}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

            <ModalDelete
                id={idPublication}
                visible={modalType === "delete"}
                onConfirm={() => {
                    setModalType(null);
                    setIdPublication(null);
                    refreshPublications();
                }}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

        </View>
    )
}