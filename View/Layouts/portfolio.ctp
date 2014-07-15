<?php
/**
 *
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'Christian Tassin Website');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $title_for_layout; ?>
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('ct.portfolio');
		echo $this->Html->css('bootstrap.min');
		echo $this->Html->css('jquery.fullpage');
		echo $this->Html->css('jquery-ui-1.10.4.custom.min');
		echo $this->Html->css('wallouf.generic');


		echo $this->Html->script('jquery-1.11.1.min');
		echo $this->Html->script('jquery-ui-1.10.4.custom.min');
		echo $this->Html->script('jquery.slimscroll.min');
		echo $this->Html->script('jquery.easings.min');
		echo $this->Html->script('jquery.fullpage.min');
		echo $this->Html->script('bootstrap.min');
		echo $this->Html->script('wallouf.resume');
		echo $this->Html->script('chart.min');

		echo $this->fetch('meta');	
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
</head>
<body>
	<?php echo $this->element('header-portfolio'); ?>
	<div id="container">
		<div id="" class="portfolio-content-right">
			<?php echo $this->fetch('content'); ?>
		</div>
	</div>
</body>
</html>
<script type="text/javascript">
	$('[data-toggle="tooltip"]').tooltip();
</script>
