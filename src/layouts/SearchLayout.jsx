import React, { useEffect, useState } from 'react';
import {
  Button, Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Loading from '../containers/Loading';
import Logo from '../img/logo.png';
import Search from '../img/search.jpg';
import '../styles/layouts/SearchLayout.scss';
import ROUTES from '../utils/RouteUtil';

function SearchLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { t } = props;

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const paramSeach = searchParams.get('search');

  const [form, setForm] = useState({
    search: paramSeach || '',
  });

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    setForm({
      search: searchParams.get('search') || '',
    });
  }, [paramSeach]);

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
      {
        loading &&
        <Loading />
      }
      <header className='header-meli'>
        <nav>
          <Container>
            <Row>
              <Col />
              <Col xs={10} className='search-container'>
                <img
                  src={Logo}
                  className='logo-mercadolibre'
                  alt='logo mercadolibre'
                />
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
        <Container>
          <Row>
            <Col />
            <Col xs={10} className='main-container'>
              <Outlet />
            </Col>
            <Col />
          </Row>
        </Container>
      </main>
    </>
  );
}

export default withTranslation()(SearchLayout);
