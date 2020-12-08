<div class="sidebar">
    <div class="sidebar__logo">
        Creatify
    </div>

    <a href="#" class="sidebar--close"><i class="fas fa-times"></i></a>

    <ul>
        {{-- dashboard --}}
        <li class="{{ Request::is('admin') ? 'sidebar__active' : '' }}">
            <a href="{{ url('admin/') }}">
                <i class="fas fa-tv"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <hr class="sidebar__divider">
        <li class="sidebar__title">Manajemen Data</li>

        {{-- kelola user --}}
        <li class="{{ Request::is('admin/user') ? 'sidebar__active' : '' }}">            
            <a href="{{ url('admin/user') }}">
                <i class="fas fa-user"></i>
                <span>Kelola User</span>
            </a>
        </li>

        {{-- admin news --}}
        <li class="{{ Request::is('admin/news') ? 'sidebar__active' : '' }}">            
            <a href="{{ url('admin/news') }}">
                <i class="far fa-newspaper"></i>
                <span>Kelola Berita</span>
            </a>
        </li>
        <li class="{{ Request::is('admin/wilayah') ? 'sidebar__active' : '' }}">            
            <a href="{{ url('admin/wilayah') }}">
                <i class="fas fa-map-marker-alt"></i>
                <span>Kelola Wilayah</span>
            </a>
        </li>
        <li class="{{ Request::is('admin/data') ? 'sidebar__active' : '' }}">
            <a href="{{ url('admin/data') }}">
                <i class="fas fa-virus"></i>
                <span>Kelola Data Covid</span>
            </a>
        </li>
    </ul>
</div>