import { Eye, Pencil, Trash } from "lucide-react-native";
import { FlatList, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import ModalVisualize from "../ModalVisualize";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";
import api from "@/services/api";

type publicationProps = {
    id: number | null;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
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
}

export default function Table({ data }: tableProps) {

    const [page, setPage] = useState(1);
    const [modalType, setModalType] = useState<"visualize" | "edit" | "delete" | null>(null);
    const [idPublication, setIdPublication] = useState<number | null>(null);
    const [namePublication, setNamePublication] = useState<string>("");
    const [descriptionPublication, setDescriptionPublication] = useState<string>("");
    const [pricePublication, setPricePublication] = useState<number>(0);
    const [imagePublication, setImagePublication] = useState<string>("");

    const paginated = data.publications;
    const totalPages = data.last_page;

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
                            <TouchableOpacity onPress={() => { setModalType("visualize"); setIdPublication(item.id); setImagePublication("@/assets/images/backgroundImage.jpg"); setNamePublication(item.name); setDescriptionPublication(item.description); setPricePublication(item.price) }}>
                                <Eye size={20} color={styles.icons.color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalType("edit"); setIdPublication(item.id); setImagePublication("@/assets/images/backgroundImage.jpg"); setNamePublication(item.name); setDescriptionPublication(item.description); setPricePublication(item.price) }}>
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

            <View style={styles.pagination}>
                <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)} >
                    <Text style={styles.cabecalhoText}>◀ Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.cabecalhoText}>{page} / {totalPages}</Text>
                <TouchableOpacity disabled={page === totalPages} onPress={() => setPage(page + 1)}>
                    <Text style={styles.cabecalhoText}>Próxima ▶</Text>
                </TouchableOpacity>
            </View>

            <ModalVisualize
                id={idPublication}
                image={imagePublication}
                name={namePublication}
                description={descriptionPublication}
                price={pricePublication}
                visible={modalType === "visualize"}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

            <ModalEdit
                id={idPublication}
                image={imagePublication}
                description={descriptionPublication}
                name={namePublication}
                price={pricePublication.toString()}
                visible={modalType === "edit"}
                onConfirm={() => {
                    if (!idPublication) return;
                    setModalType(null);
                    setIdPublication(null);
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
                }}
                onCancel={() => {
                    setModalType(null);
                    setIdPublication(null);
                }}
            />

        </View>
    )
}