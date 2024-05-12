import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      content: {
        marginTop: 50,
        alignItems: 'center',
      },
      categoryItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      categoryText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      header: {
        position: 'absolute',
        top: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 20,
        color: 'red',
      },
      leftTextContainer: {
        position: 'absolute',
        top: 120,
        left: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      leftText: {
        fontSize: 18,
        color: 'green',
      },
      button: {
        marginTop: 20,
      },
      buttonText: {
        fontSize: 18,
        color: 'blue',
        top: 350,
      },
      productList: {
        marginTop: 50,
        paddingBottom: 70, // 为返回按钮留出空间
      },
      productItem: {
        flexDirection: 'row',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10
      },
      productImage: {
        width: 50,
        height: 50,
        marginRight: 10
      },
      productTitle: {
        flex: 1,
        fontWeight: 'bold',
      },
      productPrice: {
        fontWeight: 'bold',
        color: '#E44D26',
      },
      // backButton: {
      //   position: 'absolute',
      //   bottom: 20, // 距离底部20单位
      //   alignSelf: 'center', // 按钮水平居中
      //   padding: 10,
      //   backgroundColor: '#f0f0f0', // 按钮背景色
      //   borderWidth: 1,
      //   borderColor: '#000',
      //   borderRadius: 20, // 圆角
      //   zIndex: 10, // 确保按钮在最上层
      // },
      backButton: {
        // 不再需要绝对定位
        padding: 10,
        backgroundColor: '#f0f0f0', // 按钮背景色
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20, // 圆角
      },
      backButtonText: {
        fontSize: 18,
        color: '#000',
      },
      productDetails: {
        // 产品详情内容的样式
        alignItems: 'center',
        marginTop: 50, // 或更根据你的设计调整
      },
      productDetailImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
      },
      productDetailTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      productDetailPrice: {
        fontSize: 18,
        color: '#E44D26',
      },
      productDetailDescription: {
        textAlign: 'center',
      },
      productDetailButtons: {
        flexDirection: 'row',
        marginTop: 20,
      },
      addToCartButton: {
        // 添加到购物车按钮样式
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
      },
      addToCartButtonText: {
        color: '#fff',
      },
      productDetailsContainer: {
        flex: 1,
         // 使内容和按钮分布在上下两端
      },
      scrollViewContent: {
        alignItems: 'center',
        padding: 20,
      },
      fixedBackButton: {
        padding: 10,
        backgroundColor: '#f0f0f0', // 按钮背景色
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20, // 圆角
        position: 'absolute', // 使用绝对定位将按钮放在底部
        bottom: 20, // 距离底部的位置
        alignSelf: 'center', // 在底部居中
        zIndex: 10, // 确保按钮在最上层
      },
      productListContainer: {
        flex: 1,
        justifyContent: 'space-between', // 用来确保内容和按钮位于容器的两端
      },
      productList: {
        marginTop: 50,
      },
      fixedBottomButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        position: 'absolute', // 绝对定位
        bottom: 20, // 底部间距20
        alignSelf: 'center', // 水平居中
        zIndex: 10, // 确保按钮在最上层
      },
      headerContainer: {
        height: 100, // 根据需要调整高度
        backgroundColor: 'navy', // 标题栏背景颜色
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitle: {
        color: 'white', // 标题文字颜色
        fontSize: 20, // 标题文字大小
      },
  // 其余样式省略
});

export default styles;