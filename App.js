import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { Feather, Ionicons } from "@expo/vector-icons"

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      //Header
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Hello, Devs</Text>
          <Text style={styles.headerSubtitle}>14 tasks today</Text>
        </View>
        <Image source={require("./assets/a1ae0913e0ff2083486500681569cc7c.png")} style={styles.profileImage} />
      </View>

      //Search bar
      <View style={styles.searchContainer}>
        <Feather name="search" style={styles.searchIcon} size={30} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#000" />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      //Categories Section
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>

      //Horizontal Scrollable Categories
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
       
        //Exercise Category 
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Exercise</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/d521050b002ca04c269e76ba90689734.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>

        //Study Category
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Study</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/6f5e90bec6686e3b59e76dfa6d669895.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>

          //Cooking Category
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Cooking</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/d521050b002ca04c269e76ba90689734.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>

          // Reading Category 
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Reading</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/6f5e90bec6686e3b59e76dfa6d669895.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>

          //Binge-Watching Category
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Binge-Watching</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/d521050b002ca04c269e76ba90689734.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>

          //Meditating Category
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Meditating</Text>
            <Text style={styles.categorySubtitle}>12 Tasks</Text>
            <View style={styles.imageWrapper}>
              <Image source={require("./assets/6f5e90bec6686e3b59e76dfa6d669895.png")} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      //Ongoing Tasks Section
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <View style={styles.tasksContainer}>
          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>Mobile App Development</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>Web Development</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>Push Ups</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>Prepare presentation for team meeting</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>Organize study materials for upcoming exams</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0e8",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width:300,
  },
  searchIcon: {
    marginRight: 10,
    
  },
  searchInput: {
    flex: 1,
  
  },
  filterButton: {
    backgroundColor: "#f05a28",
    borderRadius: 8,
    padding: 8,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoriesScroll: {
    flexDirection: "row",
  },
  categoryCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    width: 160,
    height: 200,
    marginRight: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categorySubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  tasksContainer: {
    marginTop: 10,
  },
  taskCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    marginBottom: 15,
    height: 200,
    justifyContent: "center",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
