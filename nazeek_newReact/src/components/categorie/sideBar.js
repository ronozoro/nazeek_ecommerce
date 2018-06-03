import React from 'react'

const SideBar = () => {
  return (
    <div class='side-filter'>
      <h2>Filter</h2>
      <div class='filter-block-content'>
        <div class='filter-block'>
          <h3 class='f-title-sm'>Furniture</h3>
          <h3 class='f-title-xs'>Furniture</h3>
          <div class='asked-list panel-group accordion-content' id='accordion'>
            <div class='panel panel-default'>
              <div class='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse1' class=''>Table</a>
              </div>
              <div id='collapse1' class='panel-collapse collapse in'>
                <div class='panel-body'>
                  <div class='ui_checkbox-collapse'>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='panel panel-default'>
              <div class='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse2' class='collapsed'>Chair</a>
              </div>
              <div id='collapse2' class='panel-collapse collapse'>
                <div class='panel-body'>
                  <div class='ui_checkbox-collapse'>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='panel panel-default'>
              <div class='panel-heading accordion-heading'>
                <a data-toggle='collapse' data-parent='#accordion' href='#collapse3' class='collapsed'>Sofa</a>
              </div>
              <div id='collapse3' class='panel-collapse collapse'>
                <div class='panel-body'>
                  <div class='ui_checkbox-collapse'>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Table</label>
                    </div>
                    <div class='ui_checkbox'>
                      <input type='checkbox' name='example' />
                      <label>Chair</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='filter-block'>
          <h3 class='f-title-sm'>Designer/ shop</h3>
          <h3 class='f-title-xs'>Designer/ shop</h3>
          <div class='block-checkList content accordion-content' data-mcs-theme='dark'>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Table</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Chair</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Console</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Dining Table</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Sofa</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Table</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Chair</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Console</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Dining Table</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Sofa</label>
            </div>
          </div>
        </div>
        <div class='filter-block'>
          <h3 class='f-title-sm'>Style</h3>
          <h3 class='f-title-xs'>Designer/ shop</h3>
          <div class='block-checkList content accordion-content' data-mcs-theme='dark'>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Modern</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Contemporary</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Classic</label>
            </div>
            <div class='ui_checkbox'>
              <input type='checkbox' name='example' />
              <label>Islamic</label>
            </div>
            <div class='ui_checkbox'>
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
