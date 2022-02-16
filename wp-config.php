<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eVVZW143IvF5qzoyE+TUog2+ZeE4tAuEsXZw7Ik+fs6DASrkoVkRzUmivr3H03LNQgNsgok0gYXl1hmoUAhr/g==');
define('SECURE_AUTH_KEY',  'jDLQJWQtCo/qOvOi1xhijRdmcOW6fCB4aCgvlu3RhNESJ0ALz/wnvaaRaTguVgAo2q/5EySfzXKuAVYWLmLnrQ==');
define('LOGGED_IN_KEY',    'HH2usObxkPawtDhdDYrie3wn08lk5Gm7t3ATablZRGxHuHwnludv63Q3JopGaACqw5aWvDLiUHsWMsX7V4KQmg==');
define('NONCE_KEY',        'B7bgZE3EYlypkxbPpg+POJ1RO/ak9IU+h0iMKby6xvShk0Hfpqktfpc1SaSNauqQAeXR+IPZUahYTAW5tGlE1w==');
define('AUTH_SALT',        'f57rRbWm7xtJwgS1LaXu3t0kDAfO4eA2aGduly0m37usFJJZbjQyCDWqm8TJUywfI1nl39moLUoi3z0AILwLJw==');
define('SECURE_AUTH_SALT', 'Hiy4/MitMiS/vTyEwa9rDmOSNZy1BVP39q+40pugAsDU0P6Niz2ygeHcKuKLvimK1rKtEgjFgjQgy3xBCsagYA==');
define('LOGGED_IN_SALT',   '8U6lAdawAPFlwsJldBhoWW6fVrP2e3mmAFPM9HoQnAJ4It9bWwRTr3z8I/SE9RIvJUu5HvS7vXurRp46WyMxIw==');
define('NONCE_SALT',       'BRBx+YdCnhTvcHZomK6OfdzmuW7OzFSJS5gXhPxxT3Dm+t6Q0PAL9Tnz+jVhA7f5Pk6ITjKsJVRiQcTlt5rzfg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
