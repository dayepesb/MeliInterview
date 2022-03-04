import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router';
import Logo from '../img/logo.png';
import Search from '../img/search.jpg';
import '../styles/layouts/SearchLayout.scss';
import ROUTES from '../utils/RouteUtil';

const SearchLayout = (props) => {
  const { t } = props;

  const navigate = useNavigate();

  const [form, setForm] = useState({
    search: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const search = () => {
    if (form.search.length > 0) {
      navigate(`${ROUTES.SEARCH_LIST}?search=${form.search}`);
    }
  };

  return (
    <>
      <header className='header-meli'>
        <nav>
          <Container>
            <Row>
              <Col />
              <Col xs={10} className='search-container'>
                <img src={Logo} className='logo-mercadolibre' alt='logo mercadolibre' />
                <Form className='form-container'>
                  <InputGroup>
                    <Form.Control
                      className='input-search-meli'
                      type='text'
                      name='search'
                      placeholder={t('search.placeholder')}
                      value={form.search}
                      onChange={handleChange}
                    />
                    <Button className='btn-search' onClick={search}>
                      <img className='' src={Search} alt='buscar' />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
              <Col />
            </Row>
          </Container>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default withTranslation()(SearchLayout);
