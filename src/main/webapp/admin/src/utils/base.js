const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmtzs4e/",
            name: "ssmtzs4e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmtzs4e/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "宠物交易系统"
        } 
    }
}
export default base