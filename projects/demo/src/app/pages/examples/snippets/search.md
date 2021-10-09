// ...

@Component({ 
  template: `
    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ngx-smart-table [settings]="settings" [source]="source"></ngx-smart-table>
  `
})
// ...