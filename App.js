import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
	Image,
} from "react-native";
import Lightbox from "react-native-lightbox-v2";

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<ScrollView>
				<View style={styles.container}>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								backgroundColor="#ECEDF5"
								resizeMode="contain"
								source={require("./img/277041751_2144993459006432_6690234188008327706_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276143482_653000115769687_790707854621997521_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/275943870_1263687710826937_3090598673248441417_n.jpeg")}
							/>
						</Lightbox>
					</View>

					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/277041751_2144993459006432_6690234188008327706_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276967328_476804960782489_1250939715845741595_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276967180_520321083078735_3733669285883138391_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276143482_653000115769687_790707854621997521_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276123589_489496506144203_4155802367304187689_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/276040607_555998735680179_6987633185056341094_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/275943870_1263687710826937_3090598673248441417_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/275920320_1490382458026716_8833178747084704186_n.jpeg")}
							/>
						</Lightbox>
					</View>
					<View>
						<Lightbox
							underlayColor="#ECEDF5"
							backgroundColor="#ECEDF5"
							renderHeader={(close) => (
								<TouchableOpacity onPress={close}>
									<Text style={styles.close}>X</Text>
									<Text style={styles.text}>
										💰 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
										🏄 sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua.🛒
									</Text>
								</TouchableOpacity>
							)}
						>
							<Image
								style={styles.image}
								resizeMode="contain"
								source={require("./img/275784378_280266800941598_3002186096789510162_n.jpeg")}
							/>
						</Lightbox>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ECEDF5",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 50,
	},
	text: {
		marginTop: 30,
		padding: 30,
	},
	image: {
		flex: 1,
		height: 300,
		width: 400,
		marginBottom: 10,
	},
	close: {
		color: "black",
		borderWidth: 1,
		borderColor: "black",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 20,
		textAlign: "center",
		margin: 20,
		alignSelf: "flex-end",
	},
});
