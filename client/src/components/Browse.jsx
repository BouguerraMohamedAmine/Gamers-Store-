import React, { useState, useEffect } from 'react';
import BrowseDetails from './BrowseDetails';
import axios from 'axios';

const Browse = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image : ""
  });
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5000/api/product', formData);
      fetchData();
      setFormData({ name: '', description: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (itemId, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/api/product/${itemId}`, updatedData);
      fetchData();
      setEditingItemId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/${itemId}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (itemId) => {
    setEditingItemId(itemId);
    const itemToEdit = data.find((element) => element.id === itemId);
    setFormData({
      name: itemToEdit.name,
      description: itemToEdit.description,
      image : itemToEdit.image
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-8">
                <div className="">
                  {/* ... */}
                </div>
              </div>
            </div>
            <div className="start-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  {/* ... */}
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="item">
                      {/* ... */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="profile.html"> pay </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="live-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  {/* ... */}
                </div>
              </div>
              <div className="row">
                {data.map((element, i) => (
                  <div className="col-lg-3 col-sm-6" key={i}>
                    <div className="item">
                      <div className="thumb">
                        <img src={element.image} alt={element.name} />
                        <div className="hover-effect">
                          <div className="content">
                            {/* Edit Button */}
                            {editingItemId === element.id ? (
                              <>
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                  }
                                />
                                <input
                                  type="text"
                                  value={formData.description}
                                  onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                  }
                                />
                                <button
                                  onClick={() =>
                                    handleUpdate(element.id, {
                                      name: formData.name,
                                      description: formData.description,
                                      image : formData.image
                                    })
                                  }
                                >
                                  Update
                                </button>
                                <button onClick={() => setEditingItemId(null)}>Cancel</button>
                              </>
                            ) : (
                              <button onClick={() => handleEdit(element.id)}>Edit</button>
                            )}
                            {/* Delete Button */}
                            <button onClick={() => handleDelete(element.id)}>Delete</button>
                          </div>
                        </div>
                      </div>
                      <div className="down-content">
                        <span>{element.category}</span>
                        <h4>{element.name}</h4>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Browse;
 