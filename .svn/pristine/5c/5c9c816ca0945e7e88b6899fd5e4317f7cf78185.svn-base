import axios from 'axios'
axios.defaults.baseURL = 'http://47.107.251.14/identity'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  // mounted() {
// 		console.log('mounted');
// 	axios.defaults.baseURL = 'http://47.107.251.14/identity'
// 	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    // if (localStorage.loginUser) {
    //   const loginUser = JSON.parse(localStorage.loginUser);
    //   axios.defaults.headers.common['sessionId'] = loginUser.sessionId
    // }
    // axios.defaults.headers.common['sessionId'] = 'd7ef668454cb4dbe921fe62a828576b4'
  // },

  /**
   * 创建formdata请求数据并返回
   * @param {*} data
   */
  createNewFormData (data) {
    const newFormData = new FormData()
    Object.keys(data).forEach((key) => {
      newFormData.append(key, data[key])
    })
    return newFormData
  },

  /**
   * 调用接口发送请求
   * @param {*} apiUrl
   * @param {*} data
   * @param {*} successCallback
   * @param {*} failCallback
   */
  createRequest (apiUrl, data, successCallback, failCallback) {
    const apiData = this.createNewFormData(data)
    axios.post(apiUrl, apiData).then(successCallback, failCallback)
    return null
  },

  /**
   * 发送邮箱验证码
   * @param {object} data
   * @param {*} successCallback
   * @param {*} failCallback
   */
  getEmailCode (data, successCallback, failCallback) {
    const apiUrl = `/api/app/common/getEmailCode.json`
    this.createRequest(apiUrl, data, successCallback, failCallback)
  },

  /**
   * 邮箱注册
   * @param {object} data
   * @param {*} successCallback
   * @param {*} failCallback
   */
  registerByEmail (data, successCallback, failCallback) {
    const apiUrl = `/api/app/common/registerByEmail.json`
    this.createRequest(apiUrl, data, successCallback, failCallback)
  },

  /**
   * 手机号登录
   * @param {*} data
   * @param {*} successCallback
   * @param {*} failCallback
   */
  login (data, successCallback, failCallback) {
    const apiUrl = `/user/login`
    this.createRequest(apiUrl, data, successCallback, failCallback)
  },
	
	/**
	 * 查看钱包地址
	 * @param {*} data
	 * @param {*} successCallback
	 * @param {*} failCallback
	 */
	walletUrl (data, successCallback, failCallback) {
    const apiUrl = `/wallet/address`
    this.createRequest(apiUrl, data, successCallback, failCallback)
	},
	
	/**
	 * 短信获取验证码
	 * @param {*} data
	 * @param {*} successCallback
	 * @param {*} failCallback
	 */
	toObtain (data, successCallback, failCallback) {
	  const apiUrl = `/ums/pwd/forgot`
	  this.createRequest(apiUrl, data, successCallback, failCallback)
	},
	
	/**
	 * 钱包余额
	 * @param {*} data
	 * @param {*} successCallback
	 * @param {*} failCallback
	 */
	wallet (data, successCallback, failCallback) {
    const apiUrl = `/wallet/balance`
    this.createRequest(apiUrl, data, successCallback, failCallback)
	},
	/**
	 * 转账
	 * @param {*} data
	 * @param {*} successCallback
	 * @param {*} failCallback
	 */
// 	wallet (data, successCallback, failCallback) {
// 	  const apiUrl = `/wallet/transfer`
// 	  this.createRequest(apiUrl, data, successCallback, failCallback)
// 	},

  /**
   * 个人信息
   * @param {*} data
   * @param {*} successCallback
   * @param {*} failCallback
   */
  getProfileMsg (data, successCallback, failCallback) {
    const apiUrl = `/api/app/account/getProfileMsg.json`
    this.createRequest(apiUrl, data, successCallback, failCallback)
  }

}
