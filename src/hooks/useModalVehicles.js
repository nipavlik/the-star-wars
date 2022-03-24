import { useRecoilState } from 'recoil'
import axios from 'axios'
import { 
  modalVehiclesData,
  modalVehiclesLoading,
  modalVehiclesVisible
} from '../store/modalVehicles'

function useModalVehicles() {

  const [ visible, setVisible ]  = useRecoilState(modalVehiclesVisible)
  const [ loading, setLoading ]  = useRecoilState(modalVehiclesLoading)
  const [ data, setData ]  = useRecoilState(modalVehiclesData)

  const close = () => {
    setVisible(false)
    setLoading(false)
  }

  const show = (vehicles) => {
    console.log(vehicles)
    setData([])
    setVisible(true)
    setLoading(true)

    getVehicles(vehicles)
      .then((res) => {
        setData(res)
        console.log(res)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getVehicles = async (urls) => {
    let networkRequestPromises = urls.map(fetchData)

    return await Promise.all(networkRequestPromises)
  }
  
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      return error
    }
  }

  return {
    data,
    loading,
    visible,
    close, 
    show
  }
}

export default useModalVehicles