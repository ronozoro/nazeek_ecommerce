import React from 'react'

const SideBar = () => {
  return (
    <div className='side-filter'>
      <h2>Filter</h2>
      <div className='filter-block-content'>
        <div className='filter-block'>
          <h3 className='f-title-sm'>Furniture</h3>
          <h3 className='f-title-xs'>Furniture</h3>
          <div className='asked-list panel-group accordion-content' id='accordion'>
            <div className='panel panel-default'>
              <div className='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse1' className=''>Table</a>
              </div>
              <div id='collapse1' className='panel-collapse collapse in'>
                <div className='panel-body'>
                  <div className='ui_checkbox-collapse'>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='panel panel-default'>
              <div className='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse2' className='collapsed'>Chair</a>
              </div>
              <div id='collapse2' className='panel-collapse collapse'>
                <div className='panel-body'>
                  <div className='ui_checkbox-collapse'>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='panel panel-default'>
              <div className='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse3' className='collapsed'>Sofa</a>
              </div>
              <div id='collapse3' className='panel-collapse collapse'>
                <div className='panel-body'>
                  <div className='ui_checkbox-collapse'>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div className='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <h3 className='f-title-sm'>Designer/ shop</h3>
          <h3 className='f-title-xs'>Designer/ shop</h3>
          <div className='block-checkList content accordion-content' data-mcs-theme='dark'>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Table</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Chair</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Console</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Dining Table</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Sofa</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Table</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Chair</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Console</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Dining Table</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Sofa</label>
            </div>
          </div>
        </div>
        <div className='filter-block'>
          <h3 className='f-title-sm'>Style</h3>
          <h3 className='f-title-xs'>Designer/ shop</h3>
          <div className='block-checkList content accordion-content' data-mcs-theme='dark'>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Modern</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Contemporary</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Classic</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Islamic</label>
            </div>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Islamic</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
