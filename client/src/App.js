import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import TreeFilter from './components/TreeFilter';
import LightFilter from './components/LightFilter';
import OrnamentFilter from './components/OrnamentFilter';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [cart, setCart] = useState([])
  const [update, setUpdate] = useState(false)
  const history = useHistory()

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(setItems)
  }, [])

  useEffect(() => {
    fetch('/auth', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  useEffect(() => {
    fetch(`/carts`)
      .then(res => res.json())
      .then((cart) => {
        setCart(cart)
      })
  }, [cart])


  // console.log(currentUser);
  const filterTrees = items.filter(item => {
    if (item.item_type == 'tree') {
      return item
    }
  })

  const filterLights = items.filter(item => {
    if (item.item_type == 'light') {
      return item
    }
  })

  const filterOrnaments = items.filter(item => {
    if (item.item_type == 'ornament') {
      return item
    }
  })

  function deleteCart(id) {
    const cartItem = cart.filter((cart) => cart.id !== id)
    setCart(cartItem)
  }

  // console.log(filterTrees);
  // console.log(filterLights);
  // console.log(filterOrnaments);

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
    history.push('/')
  }

  let subtitle;

  // console.log(items);
  // console.log(currentUser)

  return (
    <div className="App">
      <NavBar openModal={openModal} currentUser={currentUser} handleLogout={handleLogout} filterTrees={filterTrees} filterOrnaments={filterOrnaments} filterLights={filterLights} cart={cart} />
      <Switch>
        <Route path='/shop/trees'>
          <TreeFilter filterTrees={filterTrees} />
        </Route>
        <Route path='/shop/ornaments'>
          <OrnamentFilter filterOrnaments={filterOrnaments} />
        </Route>
        <Route path='/shop/lights'>
          <LightFilter filterLights={filterLights} />
        </Route>
        <Route path='/shop/:id'>
          <ItemDetails items={items} />
        </Route>
        <Route exact path='/login'>
          <Login afterOpenModal={afterOpenModal} closeModal={closeModal} openModal={openModal} modalIsOpen={modalIsOpen} subtitle={subtitle} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path='/signup'>
          <Signup afterOpenModal={afterOpenModal} closeModal={closeModal} openModal={openModal} modalIsOpen={modalIsOpen} subtitle={subtitle} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path='/cart'>
          <Cart cart={cart} deleteCart={deleteCart} />
        </Route>
        <Route path='/shop'>
          <Shop items={items} />
        </Route>
        <Route exact path='/'>
          <LandingPage items={items} />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
