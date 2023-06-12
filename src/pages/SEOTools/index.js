import React, { useEffect ,useState} from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import SweetAlert from "react-bootstrap-sweetalert"

import { Card, CardBody, CardTitle, Col, Row,Label, ButtonDropdown,Button,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import ReactApexChart from "react-apexcharts"
import avatar1 from '../../assets/images/users/avatar-3.jpg'


const All_data = [
    {
        id: 1,
        img: avatar1,
        name: 'Vaneet Kumar',
        tool:"Ping Checker",
        desc: "Software Dveloper",
        domain:"https://fontawesome.com/",
        work: 'Done',
        urls: [
            "https://fontawesome.com/icons/car?f=classic&s=thin",
            "https://fontawesome.com/icons/car-side?f=classic&s=regular",
            "https://fontawesome.com/icons/car-building?f=classic&s=light"
          ]
        
    },
    {
        id: 2,
        img: avatar1,
        name: 'Uttam',
        tool:"Meta Data Checker",
        desc: "Django Dveloper",
        domain:"https://www.thegoodcontractorslist.com/",
        work: 'Pending',
        urls: [
            "https://www.thegoodcontractorslist.com/contractor/air-75087",
            "https://www.thegoodcontractorslist.com/search/lawn-weed-control-6063",
            "thegoodcontractorslist.com/search/masonry#76063"
          ]
    },
    {
        id: 3,
        img: avatar1,
        name: 'Vikrant Kumar',
        tool:"Ping Checker",
        domain:"https://www.w3schools.com/",
        desc: "Python/Django Dveloper",
        work: 'Pending',
        urls: [
            "https://www.w3schools.com/python/python_casting.asp",
            "w3schools.com/python/python_lists.asp",
            "https://www.w3schools.com/python/python_lists_copy.asp"
          ]
    },
    {
        id: 4,
        img: avatar1,
        name: 'Jaspreet Singh',
        tool:"Seo Checker",
        desc: "Wordpress Dveloper",
        domain:"https://www.thegoodcontractorslist.com/",
        work: 'Pending',
        urls: [
            "https://www.thegoodcontractorslist.com/contractor/air-75087",
            "https://www.thegoodcontractorslist.com/search/lawn-weed-control-6063",
            "thegoodcontractorslist.com/search/masonry#76063"
          ]
    },
    {
        id: 5,
        img: avatar1,
        name: 'Shrikant Hans',
        desc: "React Dveloper",
        domain:"https://fontawesome.com/",
        tool:"Sitemap Checker",
        work: 'Pending',
        urls: [
            "https://fontawesome.com/icons/car?f=classic&s=thin",
            "https://fontawesome.com/icons/car-side?f=classic&s=regular",
            "https://fontawesome.com/icons/car-building?f=classic&s=light"
          ]
    },
    {
        id: 6,
        img: avatar1,
        name: 'Himanshu ',
        tool:"Image Optimization",
        desc: "Django Dveloper",
        domain:"https://www.digitalocean.com/",
        work: 'Pending',
        urls: [
            "digitalocean.com/solutions/data-analytics",
            "digitalocean.com/products/droplets",
            "https://www.digitalocean.com/community/newsletter"
          ]
    },
    {
        id: 7,
        img: avatar1,
        name: 'Anju Mam',
        desc: "Django Dveloper",
        domain:"https://www.hptourtravel.com//",
        tool:"Seo Checker",
        work: 'Pending',
        urls: [
            "https://www.hptourtravel.com/tours/himachal/",
            "https://www.hptourtravel.com/trips/leh-ladakh/",
            "https://www.hptourtravel.com/trips/manali/"
          ]
    },
    {
        id: 8,
        img: avatar1,
        name: 'Rajesh Kumar',
        desc: "Web Dveloper",
        domain:"https://www.digitalocean.com/",
        tool:"Sitemap Checker",
        work: 'Pending',
        urls: [
            "digitalocean.com/solutions/data-analytics",
            "digitalocean.com/products/droplets",
            "https://www.digitalocean.com/community/newsletter"
          ]
    },
    {
        id: 9,
        img: avatar1,
        name: 'Tushar Kumar',
        desc: "UX/UI Dveloper",
        domain:"https://www.hptourtravel.com//",
        tool:"Image Optimization",
        work: 'Pending',
        urls: [
            "https://www.hptourtravel.com/tours/himachal/",
            "https://www.hptourtravel.com/trips/leh-ladakh/",
            "https://www.hptourtravel.com/trips/manali/"
          ]
    },
    {
        id: 10,
        img: avatar1,
        name: 'Jhon',
        desc: "Web Designer",
        domain:"https://www.thegoodcontractorslist.com/",
        tool:"Ping Checker",
        work: 'Pending',
        urls: [
            "https://www.thegoodcontractorslist.com/contractor/air-75087",
            "https://www.thegoodcontractorslist.com/search/lawn-weed-control-and-fertilization#76063",
            "thegoodcontractorslist.com/search/masonry#76063"
          ]
    },
   
]

const MetaList = props => {


  function shoot() {
    alert('Hello!');
  }
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [selected_id, setSelected_id] = useState(null)


    const [drp_info1, setDrp_info1] = useState(false)
    
    const [inbox, setInbox] =useState(All_data);

    const [filteredInbox, setFilteredInbox] = useState(inbox);
  
        // Function to handle filtering
            const filterByName = (name) => {
            const filteredData = inbox.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
            setFilteredInbox(filteredData);
        };

    function handleDelete(id){
        let new_data = []
        for(let i=0; i< filteredInbox.length; i++){
            console.log(parseInt(filteredInbox[i].id), "====>",parseInt(id))
            if(parseInt(filteredInbox[i].id)  !== parseInt(id) ){
                new_data.push(filteredInbox[i])
            }
        }
        console.log(id)
        setDrp_info1(true)
        setconfirm_alert(false)
        setsuccess_dlg(true)
        setdynamic_title("Deleted")
        setdynamic_description("data Syccessfully Deleted.")
        setFilteredInbox(new_data)
    }

  return (
    <React.Fragment>
        
      <div className="page-content">
        
          <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
          {/* Render Breadcrumbs */}

      
          <Col xl="3" lg="4" sm="6" className="mb-2">
                 
                  {confirm_alert ? (
                    <SweetAlert
                      title="Are you sure?"
                      warning
                      showCancel
                      confirmButtonText="Yes, delete it!"
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      onConfirm={() => {
                        handleDelete(selected_id)

                        
                      }}
                      onCancel={() => {setconfirm_alert(false); setSelected_id(null)}}
                    >
                      You won't be able to revert this!
                    </SweetAlert>
                  ) : null}

            </Col>




          <Row>


            <Col lg={12}>
              <Card>
                <CardBody>
                <Row>
                    <Col> 
                    <div className="mb-3">
                        <Label className="form-label">Search By User </Label>
                        <input className="form-control"type="text" placeholder="Enter Name" onChange={(e) => filterByName(e.target.value)} />
                    </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
              
            
                  <CardTitle className="mb-3">Name </CardTitle>
                    <Row className="">
              
                    <ul className="inbox-wid list-unstyled">
                        {filteredInbox.map((item, index) => (
                            <li className="inbox-list-item" key={item.id}>
                                
                                <Link to="#">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3 align-self-center">
                                            <img  src={item.img}
                                                    className="avatar-sm rounded-circle" />
                                            </div>
                                            <div className="flex-1 overflow-hidden" style={{width:"100px"}}>
                                                <h5 className="font-size-16 mb-1">{item.name}</h5>
                                                <p className="text-truncate mb-0">{item.desc}</p>
                                            </div>


                                            <h5 style={{marginRight:"100px"}} className="mt-2">{item.domain} </h5>
                                            <h5 style={{marginRight:"100px", float:"left"}} className="mt-2">{item.tool} </h5>
                                    
                                            

                                                               
                                            
                                            <div style={{marginRight:"50px"}} >

                                                
                                                    <div className="btn-group">
                                                        <ButtonDropdown  
                                                            isOpen={drp_info1=== index}
                                                            toggle={() => {drp_info1=== index?setDrp_info1(null):setDrp_info1(index)}}>
                                                            <Button  color="info">
                                                            Info
                                                            </Button>
                                                            <DropdownToggle caret color="info" className="dropdown-toggle-split">
                                                            <i className="mdi mdi-chevron-down" />
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                            <DropdownItem header>Domains</DropdownItem>
                                                            <DropdownItem >{item.urls[0]}</DropdownItem>
                                                            <DropdownItem>{item.urls[1]}</DropdownItem>
                                                            {/* <DropdownItem divider /> */}
                                                            <DropdownItem>{item.urls[2]}</DropdownItem>
                                                            </DropdownMenu>
                                                        </ButtonDropdown>
                                                    </div>
                                        

                                            </div>

                                            <div className="font-size-12 ms-auto" style={{marginRight:"50px"}}>
                                                <button type="button" class="btn btn-success waves-effect waves-light"><i class="bx bx-check-double font-size-16 align-middle me-2"></i> Done</button>
                                            </div>

                                            <i class="mdi mdi-delete fs-2" onClick={() => {setconfirm_alert(true); setSelected_id(item.id)}} id="sa-success" ></i>   

                                        </div>
                                </Link>
                            </li>
                        
                        ))}
                            
                        </ul>

                    </Row>  
                </CardBody>
              </Card>

            </Col>

            
          </Row>
          {success_dlg ? (
            <SweetAlert
              success
              title={dynamic_title}
              onConfirm={() => {
                setsuccess_dlg(false)
               
              }}
            >
              {dynamic_description}
            </SweetAlert>
          ) : null}
      </div>
    </React.Fragment>
  )
}


export default MetaList


